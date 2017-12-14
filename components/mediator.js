export default class Mediator {
    emit(channel, fn) {
        if (!this.mediator.channels[channel]) this.mediator.channels[channel] = [];
        this.mediator.channels[channel].push({
            context: this,
            callback: fn
        });
        return this;
    }

    on(channel) {
        if (!this.mediator.channels[channel]) return false;
        let subscription = null;
        let args = Array.prototype.slice.call(arguments, 1);
        for (let i = 0, l = this.mediator.channels[channel].length; i < l; i++) {
            subscription = this.mediator.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    }

    installTo(obj){
        obj.on = emit(channel, fn);
        obj.emit = on(channel);
    }
}

/* let subscribe = function (channel, fn) {
        if (!mediator.channels[channel]) mediator.channels[channel] = [];
        mediator.channels[channel].push({
            context: this,
            callback: fn
        });
        return this;
    },

    publish = function (channel) {
        if (!mediator.channels[channel]) return false;
        let subscription = null;
        let args = Array.prototype.slice.call(arguments, 1);
        for (let i = 0, l = mediator.channels[channel].length; i < l; i++) {
            subscription = mediator.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };

let mediator = {
    channels: {},
    emit: publish,
    on: subscribe,
    installTo: function (obj) {
        obj.on = subscribe;
        obj.emit = publish;
    }
};

export default mediator; */