import React, {Component} from 'react';

class Certificate extends Component {
    render() {
        return (
            <table>
                <tr>
                    <th>IT関連</th>
                    <th>取得年月</th>
                    <th>その他</th>
                    <th>取得年月</th>
                </tr>
                <tr>
                    <td>ITパスポート試験</td>
                    <td>2020年6月</td>
                    <td>日商ビジネス英語検定3級</td>
                    <td>2018年4月</td>
                </tr>
                <tr>
                    <td>Excel VBAスタンダード</td>
                    <td>2020年2月</td>
                    <td>ファイナンシャル・プランニング技能士3級</td>
                    <td>2018年2月</td>
                </tr>
            </table>
        )
    }
}

export default Certificate;