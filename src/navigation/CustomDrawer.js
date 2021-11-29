import React from "react";
import { Pressable, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: "#c24e5e", padding: 15 }}>
                {/* User Row */}
                <View style={{ marginVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#fff', width: 60, height: 60, borderRadius: 30 }} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Rishab Burman</Text>
                    </View>
                </View>
                {/* Chat with our chat bot */}
                <Pressable onPress={() => { console.warn('ChatBox') }} style={{ marginBottom: 5 }}>
                    <Text style={{ color: "#fff" }}>Chat With Us</Text>
                </Pressable>
            </View>
            <DrawerItemList  {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer