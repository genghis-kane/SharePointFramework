require('set-webpack-public-path!');

import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import styles from '../DocumentCardExample.module.scss';
import { IDocumentCardExampleWebPartProps } from '../IDocumentCardExampleWebPartProps';
import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity,
    IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

export interface IDocumentCardExampleProps extends IDocumentCardExampleWebPartProps {
}

export default class DocumentCardExample extends React.Component<IDocumentCardExampleProps, {}> {
  public render(): JSX.Element {
    const previewProps: IDocumentCardPreviewProps = {
    previewImages: [
        {
        previewImageSrc: require('puppy.jpg'),
        iconSrc: require('icon-ppt.png'),
        width: 318,
        height: 196,
        accentColor: '#ce4b1f'
        }
    ],
    };

    return (
        <DocumentCard onClickHref='http://bing.com'>
        <DocumentCardPreview { ...previewProps } />
        <DocumentCardTitle title='Puppies to be brought home for the fiscal year 2016.pptx'/>
        <DocumentCardActivity
            activity='Created Oct 19, 2016'
            people={
            [
                { name: 'Jess Kane', profileImageSrc: require('avatar-kat.png') }
            ]
            }
        />
        </DocumentCard>
    );
  }
}
