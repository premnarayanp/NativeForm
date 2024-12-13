import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { QuestionsTab, ResponseTab, PreviewTab, SettingTab } from '../screens/formTopTabScreen/index';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function FormTopTabNavigator({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="QuestionsTab"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarLabelStyle: { fontSize: 11 }, // Customize label font size
                    tabBarIndicatorStyle: { backgroundColor: '#e91e63' }, // Style for active tab indicator
                }}
            >
                <Tab.Screen
                    name="QuestionsTab"
                    component={QuestionsTab}
                    options={{
                        tabBarLabel: 'Question',
                        // tabBarIcon: ({ color }) => (
                        //     <MaterialCommunityIcons name="newspaper" color={color} size={20} />
                        // ),
                    }}
                />
                <Tab.Screen
                    name="ResponseTab"
                    component={ResponseTab}
                    options={{
                        tabBarLabel: 'Response',
                        // tabBarIcon: ({ color }) => (
                        //     <MaterialCommunityIcons
                        //         name="account-multiple-plus-outline"
                        //         color={color}
                        //         size={20}
                        //     />
                        // ),
                    }}
                />
                <Tab.Screen
                    name="PreviewTab"
                    component={PreviewTab}
                    options={{
                        tabBarLabel: 'Preview',
                        // tabBarIcon: ({ color }) => (
                        //     <MaterialCommunityIcons name="bookmark" color={color} size={20} />
                        // ),
                    }}
                />
                <Tab.Screen
                    name="SettingTab"
                    component={SettingTab}
                    options={{
                        tabBarLabel: 'Setting',
                        // tabBarIcon: ({ color }) => (
                        //     <MaterialCommunityIcons name="heart" color={color} size={20} />
                        // ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
