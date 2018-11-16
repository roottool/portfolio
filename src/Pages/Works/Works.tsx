import * as React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import styles from './Works.module.scss';

class Works extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1 className={styles.title}>Works</h1>
                <Container fluid={true} className={styles.container}>
                    <Row>
                        <Col xs="12" lg="4">
                            <Card className={styles.card}>
                                <CardBody>
                                    <CardTitle>Cookie☆Sound</CardTitle>
                                    <CardText className={styles.cardText}>
                                        C# + Firebase<br />
                                        Firebaseからローカルにダウンロードした、音声ファイルを再生するGUIチャットアプリです。
                                        IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className={styles.sourceLink}>
                                        <a href="https://github.com/roottool/Cookiesound-kari-">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" lg="4">
                            <Card className={styles.card}>
                                <CardBody>
                                    <CardTitle>Cookie☆☆Sound</CardTitle>
                                    <CardText className={styles.cardText}>
                                        Python<br />
                                        ローカルの音声ファイルを再生するCUIチャットアプリです。
                                        IRCチャットサーバの同じチャットルーム内のメンバーに対して、ローカルの音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className={styles.sourceLink}>
                                        <a href="https://github.com/roottool/CookieSound2">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" lg="4">
                            <Card className={styles.card}>
                                <CardBody>
                                    <CardTitle>OrgaSound</CardTitle>
                                    <CardText className={styles.cardText}>
                                        Angular 6 + Firebase<br />
                                        Firebaseから音声ファイルを取得して再生することが出来るWebチャットアプリです。
                                        チャットルーム内のメンバーに対して、Firebase上にある音声ファイルを再生させることが可能です。
                                    </CardText>
                                    <div className={styles.sourceLink}>
                                        <a href="https://github.com/roottool/OrgaSound">ソースコード</a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" lg="4">
                            <Card className={styles.card}>
                                <CardBody>
                                    <CardTitle>Portfolio site</CardTitle>
                                    <CardText className={styles.cardText}>
                                        React<br />
                                        このポートフォリオです。
                                        Reactの学習のために作成しました。
                                        スマートフォンからの閲覧を考慮したレスポンシブデザインになっています。
                                    </CardText>
                                    <div className={styles.sourceLink}>
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
