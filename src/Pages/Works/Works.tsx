import * as React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import './Works.css';

class Works extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1 className="works-page__title">Works</h1>
                <Container fluid={true} className="works-page__container">
                    <Row>
                        <Col xs="12" lg="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>Cookie☆Sound</CardTitle>
                                    <CardText className="works-page__cardText">
                                        C# + Firebase<br />
                                        Firebaseからローカルにダウンロードした、音声ファイルを再生するGUIチャットアプリです。
                                        IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/Cookiesound-kari-">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" lg="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>Cookie☆☆Sound</CardTitle>
                                    <CardText className="works-page__cardText">
                                        Python<br />
                                        ローカルの音声ファイルを再生するCUIチャットアプリです。
                                        IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/CookieSound2">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" lg="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>OrgaSound</CardTitle>
                                    <CardText className="works-page__cardText">
                                        Angular 6 + Firebase<br />
                                        Firebaseから音声ファイルを取得して再生することが出来るWebチャットアプリです。
                                        チャットルーム内のメンバーに対して、Firebase上にある音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/OrgaSound">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="4">
                            <Card className="works-page__card">
                                <CardBody>
                                    <CardTitle>Portfolio site</CardTitle>
                                    <CardText className="works-page__cardText">
                                        React<br />
                                        このポートフォリオです。
                                        Reactの学習のために作成しました。
                                        スマートフォンからの閲覧を考慮したレスポンシブデザインになっています。
                                    </CardText>
                                    <div className="works-page__source-link">
                                        <a href="https://github.com/roottool/roottool.github.io">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Works;
