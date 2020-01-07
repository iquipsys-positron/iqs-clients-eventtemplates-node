let process = require('process');

import { ConfigParams } from 'pip-services3-commons-node';

import { EventTemplatesClientFixtureV1 } from './EventTemplatesClientFixtureV1';
import { EventTemplatesLambdaClientV1 } from '../../src/version1/EventTemplatesLambdaClientV1';

suite('EventTemplatesLambdaClient', ()=> {
    let AWS_LAMDBA_ARN = process.env["AWS_LAMDBA_ARN"] || "";
    let AWS_ACCESS_ID = process.env["AWS_ACCESS_ID"] || "";
    let AWS_ACCESS_KEY = process.env["AWS_ACCESS_KEY"] || "";

    if (!AWS_LAMDBA_ARN || !AWS_ACCESS_ID || !AWS_ACCESS_KEY)
        return;

    let config = ConfigParams.fromTuples(
        "lambda.connection.protocol", "aws",
        "lambda.connection.arn", AWS_LAMDBA_ARN,
        "lambda.credential.access_id", AWS_ACCESS_ID,
        "lambda.credential.access_key", AWS_ACCESS_KEY,
        "lambda.options.connection_timeout", 30000
    );
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: EventTemplatesLambdaClientV1;
    let fixture: EventTemplatesClientFixtureV1;

    setup((done) => {
        client = new EventTemplatesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new EventTemplatesClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});