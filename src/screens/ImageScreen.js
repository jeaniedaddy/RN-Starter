import React from 'react';
import {Text, View,  StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='Forest'/>
            <ImageDetail title='Beach'/>
            <ImageDetail title='Mountain'/>
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    }
});

export default ImageScreen;