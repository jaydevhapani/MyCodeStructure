import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {doLogin} from '../../ReduxConfig/Action/LoginAction/LoginActions';

const Home = () => {
  const Dispatch = useDispatch();
  const LoginState = useSelector(state => state.LoginReducer);
  useEffect(() => {
    let Params = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    Dispatch(doLogin(Params));
  }, []);

  useEffect(() => {
    console.log('LoginState => ', LoginState);
  }, [LoginState]);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
