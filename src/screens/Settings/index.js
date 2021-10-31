import React from "react";
import { View, Text, Pressable } from "react-native";
import { Auth } from "@aws-amplify/auth";

const Settings = (prop) => {
    return (
        <View style={{ backgroundColor: '#eee' }}>
            <Pressable
                onPress={() => { Auth.signOut() }}
                style={{
                    backgroundColor: '#fff',
                    marginVertical: 8,
                }}
            >
                <Text style={{ color: 'red', padding: 15 }}>Sign Out</Text>
            </Pressable>
        </View>
    );
};

export default Settings;