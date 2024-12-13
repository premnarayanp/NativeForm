import StackNavigator from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store/configureStore';

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
    );
} 