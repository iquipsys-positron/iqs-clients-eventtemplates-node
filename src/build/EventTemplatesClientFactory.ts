import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { EventTemplatesDirectClientV1 } from '../version1/EventTemplatesDirectClientV1';
import { EventTemplatesHttpClientV1 } from '../version1/EventTemplatesHttpClientV1';
import { EventTemplatesLambdaClientV1 } from '../version1/EventTemplatesLambdaClientV1';

export class EventTemplatesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-eventtemplates', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-eventtemplates', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-eventtemplates', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-eventtemplates', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EventTemplatesClientFactory.DirectClientV1Descriptor, EventTemplatesDirectClientV1);
		this.registerAsType(EventTemplatesClientFactory.HttpClientV1Descriptor, EventTemplatesHttpClientV1);
		this.registerAsType(EventTemplatesClientFactory.LambdaClientV1Descriptor, EventTemplatesLambdaClientV1);
	}
	
}
