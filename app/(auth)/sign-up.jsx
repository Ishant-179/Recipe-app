import { View, Text, Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo';
import { authStyles } from '../../assets/styles/auth.styles';
import { ScrollView } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VerifyEmailScreen from './verify-email';

const SignUpScreen = () => {

  
  const router = useRouter();

  const { signUp, isLoaded } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingVerfication, setPendingVerification] = useState(false);

    const handelSignUp = async() => {
      if(!email || !password){
        Alert.alert("Error", "Please fill in all fields");
      }
      if(password.length  < 6) {
        Alert.alert("Error", "Password must be at least 6 charcters");
      }

      if(!isLoaded) return ;

        setLoading(true)

      try {
        await signUp.create({emailAddress: email, password})

        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

        setPendingVerification(true)
      } catch (error) {
        Alert.alert("Error", error.errors?.[0]?.message || "Failed to Create account")
        console.error(JSON.stringify(error, null, 2));
      } finally {
        setLoading(false)
      }

    }


    if (pendingVerfication) return <VerifyEmail email={email} onBack={() => setPendingVerification(false)} />

  return (
    <View style={authStyles.container}>
     <KeyboardAvoidingView
     style={authStyles.keyboardView}
     keyboardVerticalOffset={Platform.OS === "android" ? 64 : 0}
     behavior={Platform.OS === "android" ? "padding" : "height"}
     >
        <ScrollView
        contentContainerStyle={authStyles.scrollContent}
        showsVerticalScrollIndicator={false}
        >
            {/* Image Container */}

            <View 
            style={authStyles.imageContainer}
            >
                <Image
                source={require("../../assets/images/i2.png")} 
                style={authStyles.image}
                contentFit='contain'
                 />
            </View>
          <Text style={authStyles.title}>Create Account</Text>

          {/* form container */}
          <View
          style={authStyles.formContainer}
          >

            {/* Email input */}

             <View style={authStyles.inputContainer}>
                              <TextInput 
                              style={authStyles.textInput}
                              placeholder='Enter email'
                              placeholderTextColor={COLORS.textLight}
                              value={email}
                              onChangeText={setEmail}
                              keyboardType='email-address'
                              autoCapitalize='none'
                              />
                          </View>

            {/* Password input */}
              <View style={authStyles.inputContainer}>
                <TextInput 
                style={authStyles.textInput}
                placeholder='Enter Password'
                placeholderTextColor={COLORS.textLight}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize='none'
                />

                <TouchableOpacity
                style={authStyles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color={COLORS.textLight}

                  />
                </TouchableOpacity>
              </View>
            
            <TouchableOpacity
                          style={[authStyles.authButton, loading && authStyles.buttonDisabled]}
                          onPress={handelSignUp}
                          disabled={loading}
                          activeOpacity={0.8}
                          >
                            <Text style={authStyles.buttonText}>{loading ? "Creating Account..." : "Sign Up"}</Text>
                          </TouchableOpacity>
            
                          {/* Sign Up Link */}
            
                          <TouchableOpacity
                          style={authStyles.linkContainer}
                          onPress={() => router.back()}
                          >
                              <Text
                              style={authStyles.linkText}
                              >
                                Already have an account ? <Text style={authStyles.link}>Sign In</Text>
                              </Text>
                          </TouchableOpacity>
            
          </View>

        </ScrollView>
     </KeyboardAvoidingView>
    </View>
  )
}

export default SignUpScreen