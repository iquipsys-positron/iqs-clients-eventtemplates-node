import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { EventTemplateV1 } from './EventTemplateV1';
import { IEventTemplatesClientV1 } from './IEventTemplatesClientV1';

export class EventTemplatesHttpClientV1 extends CommandableHttpClient implements IEventTemplatesClientV1 {       
    
    constructor(config?: any) {
        super('v1/event_templates');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getTemplates(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<EventTemplateV1>) => void): void {
        this.callCommand( 
            'get_templates', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getTemplateById(correlationId: string, templateId: string,
        callback: (err: any, template: EventTemplateV1) => void): void {
        this.callCommand( 
            'get_template_by_id',
            correlationId,
            {
                template_id: templateId
            }, 
            callback
        );        
    }

    public createTemplate(correlationId: string, template: EventTemplateV1,
        callback: (err: any, template: EventTemplateV1) => void): void {
        this.callCommand(
            'create_template',
            correlationId,
            {
                template: template
            }, 
            callback
        );
    }

    public updateTemplate(correlationId: string, template: EventTemplateV1,
        callback: (err: any, template: EventTemplateV1) => void): void {
        this.callCommand(
            'update_template', 
            correlationId,
            {
                template: template
            }, 
            callback
        );
    }

    public deleteTemplateById(correlationId: string, templateId: string,
        callback: (err: any, template: EventTemplateV1) => void): void {
        this.callCommand(
            'delete_template_by_id', 
            correlationId,
            {
                template_id: templateId
            }, 
            callback
        );
    }
    
}
