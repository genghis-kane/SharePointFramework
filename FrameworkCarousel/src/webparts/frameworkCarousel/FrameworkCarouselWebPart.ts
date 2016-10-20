import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import * as strings from 'frameworkCarouselStrings';
import FrameworkCarousel, { IFrameworkCarouselProps } from './components/FrameworkCarousel';
import { IFrameworkCarouselWebPartProps } from './IFrameworkCarouselWebPartProps';
import MockHttpClient from './mocks/MockHttpClient';
import NewsArticleItem from './models/NewsArticleItem';

export default class FrameworkCarouselWebPart extends BaseClientSideWebPart<IFrameworkCarouselWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    var newsArticles: NewsArticleItem[] = this._getMockNewsArticles();

    const element: React.ReactElement<IFrameworkCarouselProps> = React.createElement(FrameworkCarousel,
      { description: this.properties.description, newsArticles: newsArticles }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }

  private _getMockNewsArticles(): NewsArticleItem[] {
    return MockHttpClient.getSynch(this.context.pageContext.web.absoluteUrl)
  }

  private _getNewsArticles(): Promise<NewsArticleItem[]> {
    return this.context.httpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/lists?$filter=Hidden eq false`)
    .then((response: Response) => {
      return response.json();
    });
  }
}
