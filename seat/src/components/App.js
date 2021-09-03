import React from 'react';
import Post from './Post';


export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <Post title="React é demais"/>
                <Post title="Aprender React pode ser simples"/>
                <Post title="Vamos entender as classes"/>
            </div>
        );
    }
}