const kafka = require("kafka-node");
const pubsub = require("./gql/pubsub");
const config = require("./config");

const LICENCEPLATE_TOPIC = "licenceplate_topic";
const STATE_TOPIC = "state_topic";

module.exports = {
  getLabelTopic() {
    const client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST });
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
      pubsub.publish(LICENCEPLATE_TOPIC, { licenceplateSub: licenceplate });
    });
  },
  getStateTopic() {
    const client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST });
    var Consumer = kafka.Consumer;
    var consumer = new Consumer(client, [{ topic: "StateTopic" }]);
    consumer.on("message", message => {
      var value = JSON.parse(message.value);
      pubsub.publish(STATE_TOPIC, { stateSub: value.state });
    });
  },
  getLastImg() {
    const client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST });
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
  },
  startFramePlateGrab() {
    var Producer = kafka.Producer,
      client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST }),
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
        console.error(err);
        producer.close();
      });
    });

    producer.on("error", function(err) {
      console.log("producer error: " + err);
    });
  },
  stopFramePlateGrab() {
    const client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST });
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
  },
  resumeFramePlateGrab() {
    const client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST });
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
  },
  suspendFramePlateGrab() {
    const client = new kafka.KafkaClient({ kafkaHost: config.KAFKA_HOST });
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
  }
};
