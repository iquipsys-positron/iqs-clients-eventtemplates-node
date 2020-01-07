"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const EventTemplatesDirectClientV1_1 = require("../version1/EventTemplatesDirectClientV1");
const EventTemplatesHttpClientV1_1 = require("../version1/EventTemplatesHttpClientV1");
const EventTemplatesLambdaClientV1_1 = require("../version1/EventTemplatesLambdaClientV1");
class EventTemplatesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(EventTemplatesClientFactory.DirectClientV1Descriptor, EventTemplatesDirectClientV1_1.EventTemplatesDirectClientV1);
        this.registerAsType(EventTemplatesClientFactory.HttpClientV1Descriptor, EventTemplatesHttpClientV1_1.EventTemplatesHttpClientV1);
        this.registerAsType(EventTemplatesClientFactory.LambdaClientV1Descriptor, EventTemplatesLambdaClientV1_1.EventTemplatesLambdaClientV1);
    }
}
exports.EventTemplatesClientFactory = EventTemplatesClientFactory;
EventTemplatesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventtemplates', 'factory', 'default', 'default', '1.0');
EventTemplatesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventtemplates', 'client', 'direct', 'default', '1.0');
EventTemplatesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventtemplates', 'client', 'http', 'default', '1.0');
EventTemplatesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-eventtemplates', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=EventTemplatesClientFactory.js.map