const PubSub = (function() {
    let eventSourceAddress;
    let subscribers;
    let tick;
  
    function __tickHandler() {
      _pushPayloadToSubscribers(new Date());
    }
  
    function _pushPayloadToSubscribers(payload) {
      subscribers.map(subscriber => {
        subscriber.callback(payload);
      });
    }
  
    function _addSubscriber(callback) {
      var id = new Date().getTime();
      subscribers.push({ id, callback });
      return id;
    }
  
    function _removeSubscriber(id) {
      subscribers = subscribers.filter(subscriber => subscriber.id !== id);
    }
  
    function _removeAllSubscribers() {
      subscribers = [];
    }
  
    return class _PubSubInternal {
      constructor(address) {
        eventSourceAddress = address;
        subscribers = [];
        tick = null;
      }
  
      plugSource() {
        console.log("Event feed attached!");
        tick = window.setInterval(__tickHandler.bind(this), 4000);
      }
  
      unplugSource() {
        window.clearInterval(tick);
        console.log("Event feed unplugged!");
      }
  
      subscribe(callback) {
        return _addSubscriber(callback);
      }
  
      unsubscribe(id) {
        return _removeSubscriber(id);
      }
  
      unsubscribeAll() {
        return _removeAllSubscribers();
      }
    };
  })();
  