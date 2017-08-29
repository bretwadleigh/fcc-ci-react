import React from 'react';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Title from '../components/Title';
import 'isomorphic-fetch';

const this_title="About";
const this_desc="About Us";

export default class extends React.Component {

  static async getInitialProps() {
    const apiUrl = 'https://test1.jesseweigel.com/demo/wp-json/wp/v2/';
    const params = 'posts';
    const res = await fetch(apiUrl + params);
    const data = await res.json();
    return { data }
  }

render () {
  return (
    <div>
    <Head title={this_title} description={this_desc} />
    <main>
    <Title title={this_title} />
    <div className="container">
      <div className="section">
      {this.props.data.map(function(post, i) {
        return <div className="row" key={i}>
        <h1>{post.title.rendered}</h1>
        <p className="flow-text" dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
        </div>
      })}
      </div>
    </div>
    </main>
    <Footer />
    </div>
  )
};

}
