const express = require("express");
const bodyParser = require("body-parser");
var kafka = require("kafka-node");
var logger = require("morgan");
var methodOverride = require("method-override");
var cors = require("cors");

const config = require("./config");
const app = express();
const port = config.PORT;

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(methodOverride());
app.use(cors());

const client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST });

app.post("/", (req, res) => {
  console.log("Request body :" + JSON.stringify(req.body));

  var Producer = kafka.Producer;

  var kafka_user_producer = new Producer(client);

  var payloads = [{ topic: "" }];

  kafka_user_producer.on("ready", function() {
    kafka_user_producer.send(payloads, function(err, data) {
      console.log("Data: " + data);
      console.log("Error on data: " + err);
    });
  });
  kafka_user_producer.on("error", function(err) {
    console.log(err);
  });
});

app.post("/getLabelTopic", (req, res) => {
  var Consumer = kafka.Consumer;
  var consumer = new Consumer(
    client,
    [{ topic: "LicensePlateTextTopic", offset: 0 }],
    {
      fromOffset: true
    }
  );
  consumer.on("message", message => {
    //console.log(message)
    var msgKey = JSON.parse(message.key);
    var licenceplate = {
      id: msgKey.id,
      prediction: msgKey.prediction,
      value: msgKey.value,
      image: msgKey.image
    };

    res.send(licenceplate);
  });
});

app.post("/getStateTopic", (req, res) => {
  var Consumer = kafka.Consumer;
  var consumer = new Consumer(client, [{ topic: "StateTopic" }]);
  consumer.on("message", message => {
    var value = JSON.parse(message.value);
    res.send({ stateSub: value.state });
  });
});

app.post("/getLastImg", (req, res) => {
  var Consumer = kafka.Consumer;
  var consumer = new Consumer(
    client,
    [{ topic: "LicensePlateTextTopic", offset: 1000 }],
    {
      fromOffset: true
    }
  );
  consumer.on("message", message => {
    console.log(message);
    //pubsub.publish(STATE_TOPIC, {stateSub: value.state});
  });
});

app.post("/startFramePlateGrab", (req, res) => {
  console.log("starting Frame Plate Grab");

  var Producer = kafka.Producer,
    producer = new Producer(client),
    payloads = [
      {
        topic: "ControlTopic",
        messages: JSON.stringify({
          appID: "Frame_Plate_Grab",
          control: "start"
        })
      }
    ];
  producer.on("ready", function() {
    console.log("ready");
    producer.send(payloads, function(err, data) {
      console.log(data);
      res.send(data);
      producer.close();
    });
  });

  client.on("error", function(err) {
    console.log("client error: " + err);
    res.send(err);
  });
});

app.post("/stopFramePlateGrab", (req, res) => {
  var Producer = kafka.Producer,
    producer = new Producer(client),
    payloads = [
      {
        topic: "ControlTopic",
        messages: JSON.stringify({
          appID: "Frame_Plate_Grab",
          control: "stop"
        })
      }
    ];
  producer.on("ready", function() {
    console.log("ready");
    producer.send(payloads, function(err, data) {
      console.log(data);
      producer.close();
    });
  });

  client.on("error", function(err) {
    console.log("client error: " + err);
  });
});

app.post("/resumeFramePlateGrab", (req, res) => {
  var Producer = kafka.Producer,
    producer = new Producer(client),
    payloads = [
      {
        topic: "ControlTopic",
        messages: JSON.stringify({
          appID: "Frame_Plate_Grab",
          control: "resume"
        })
      }
    ];
  producer.on("ready", function() {
    console.log("ready");
    producer.send(payloads, function(err, data) {
      console.log(data);
      producer.close();
    });
  });

  client.on("error", function(err) {
    console.log("client error: " + err);
  });
});

app.post("/suspendFramePlateGrab", (req, res) => {
  var Producer = kafka.Producer,
    producer = new Producer(client),
    payloads = [
      {
        topic: "ControlTopic",
        messages: JSON.stringify({
          appID: "Frame_Plate_Grab",
          control: "suspend"
        })
      }
    ];
  producer.on("ready", function() {
    console.log("ready");
    producer.send(payloads, function(err, data) {
      console.log(data);
      producer.close();
    });
  });

  client.on("error", function(err) {
    console.log("client error: " + err);
  });
});

app.post("/file-upload", function() {
  console.log("File Upload API Activated!!");
});

app.post("/errors", (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(500, () => {
  console.log("Server is running on port " + port);
});
