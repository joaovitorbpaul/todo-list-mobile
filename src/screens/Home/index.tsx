import { Image, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles";

import Logo from "../../../assets/icon.png";

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
            </View>
            <View style={styles.addTodoInput}>
                <TextInput value={'ieuahiuehiuea'}/>
                <TouchableOpacity style={styles.addButton}>
                    <Icon  name="pluscircleo" size={24} color={'#fff'}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}