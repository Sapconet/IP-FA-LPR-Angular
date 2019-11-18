const pubsub = require("./pubsub");
const {
  getLabelTopic,
  getStateTopic,
  startFramePlateGrab,
  stopFramePlateGrab,
  resumeFramePlateGrab,
  suspendFramePlateGrab
} = require("../kafka");
// Some fake data
/*const date = new Date();
const persons = [
  {
    cameraID: 'Office',
    name: "Romeo",
    timestamp: date.getHours() + ':' + date.getMinutes() + ', ' + date.toLocaleDateString()
  },
  {
    cameraID: 'Office',
    name: "Brendan",
    timestamp: date.getHours() + ':' + date.getMinutes() + ', ' + date.toLocaleDateString()
  },
]; */
const LICENCEPLATE_TOPIC = "licenceplate_topic";
const STATE_TOPIC = "state_topic";

// The resolvers
module.exports = resolvers = {
  Query: {
    licenceplates: () => {
      //pubsub.publish(TEST_TOPIC, {testSub: "Test SUB"});
      return licenceplates;
    },
    licenceplate: (parent, { prediction }) => {
      console.log("This prediction " + prediction);
      return licenceplates.find(x => {
        return x.prediction === prediction;
      });
    },
    startPlateGrab: () => {
      startFramePlateGrab();
      return "Plategrab Start kicked off";
    },
    stopPlateGrab: () => {
      stopFramePlateGrab();
      return "Plategrab Stop kicked off";
    },
    resumePlateGrab: () => {
      resumeFramePlateGrab();
      return "Plategrab Resume kicked off";
    },
    suspendPlateGrab: () => {
      suspendFramePlateGrab();
      return "Plategrab Suspend kicked off";
    }
  },
  Subscription: {
    licenceplateSub: {
      subscribe: () => {
        getLabelTopic();
        return pubsub.asyncIterator(LICENCEPLATE_TOPIC);
      }
    },
    stateSub: {
      subscribe: () => {
        getStateTopic();
        return pubsub.asyncIterator(STATE_TOPIC);
      }
    }
  }
};
