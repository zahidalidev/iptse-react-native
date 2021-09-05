import React from 'react';
import { Modal, View, ActivityIndicator, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height

// config
import Colors from '../utils/color';

function LoadingModal({ show }) {
    return (
        <Modal visible={show} transparent={true} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <View style={{ marginTop: (windowHeight / 2) - 50, width: "100%", height: 80, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ elevation: 5, width: 80, height: 80, borderRadius: 10, backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator size={30} color={Colors.darkGreen} />
                </View>
            </View>
        </Modal>
    );
}

export default LoadingModal;