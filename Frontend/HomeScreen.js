// import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import SelectDropdown from 'react-native-select-dropdown';
// import React, { useState } from 'react';

// const HomeScreen = () => {
//     const [fullName, setFullname] = useState();
//     const [emailId, setEmailId] = useState();
//     const [phoneNo, setPhoneNo] = useState();
//     const [gender, setGender] = useState();
//     const [password, setPassword] = useState();
//     const [confirmPass, setConfirmPass] = useState();

//     const [errorFullname, setErrorFullname] = useState();
//     const [errorEmailId, setErrorEmailId] = useState(false);
//     const [errorNumber, setErrorNumber] = useState(false);
//     const [errorGender, setErrorGender] = useState(false);
//     const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);
//     const [errorPassword, setErrorPassword] = useState(false);

//     const genderData = ["Select Gender", "Male", "Female", "Other"];
//     var nameRegx = /[a-zA-Z]+[a-zA-Z]$/;
//     var passRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//     var emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const onChangeFullname = (text) => {
//         if (text.trim().length !== 0) {
//             if (!(nameRegx.test(text))) {
//                 setErrorFullname(true);
//                 setFullname(text);
//             } else {
//                 setErrorFullname(false);
//                 setFullname(text);
//             }
//         } else {
//             setErrorFullname(false);
//             setFullname(text);
//         }
//     }
//     const onChangeNumber = (text) => {
//         if (text.trim().length !== 0) {
//             if (isNaN(text)) {
//                 setErrorNumber(true);
//                 if (text.length < 10) { 
//                     setErrorNumber(true);
//                     setPhoneNo(text);
//                 } else {
//                     setErrorNumber(false);
//                     setPhoneNo(text);    
//                 }
//             }else {
//                 setErrorNumber(true);
//                 setPhoneNo(text);
//             }
//         } else {
//             setErrorNumber(true);
//             setPhoneNo(text);
//         }
//     }

//     const onChangeEmail = (text) => {
//         if ((text === "") || !(text.test(emailRegx))) {
//             setErrorEmailId(true);
//         } else {
//             setErrorEmailId(false);
//         }
//         setEmailId(text);
//     }

//     const onChangePassword = (text) => {
//         if (text === "" || !(text.test(passRegx))) {
//             setErrorPassword(true);
//         } else {
//             setErrorPassword(false);
//         }
//         setPassword(text);
//     }

//     const onChangeConfirmPass = (text) => {
//         if (text === "" || !(text === password)) {
//             setErrorConfirmPassword(true);
//         } else {
//             setErrorConfirmPassword(false);
//         }
//         setConfirmPass(text);
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (fullName === "" && emailId === "" && phoneNo === "" && gender === "--Select gender--" && password === "" && confirmPass === "") {
//             Alert.alert("All filed required please fill up all filed first");
//             setErrorFullname(true);
//             setErrorNumber(true);
//             setErrorEmailId(true);
//             setErrorGender(true);
//             setErrorPassword(true);
//             setErrorConfirmPassword(true);
//             return false;
//         }
//         //fullname condition
//         if (fullName === "") {
//             Alert.alert("please enter fullname");
//             setErrorFullname(true);
//             return false;
//         } else {
//             setErrorFullname(false);
//         }

//         //mobile number condition
//         if (isNaN(phoneNo) || (phoneNo.length < 10) || phoneNo === "") {
//             Alert.alert("please enter mobile No");
//             setErrorNumber(true);
//             return false;
//         } else {
//             setErrorNumber(false);
//         }

//         //gmail condition
//         if (emailId === "") {
//             Alert.alert("please enter gmail Id");
//             setErrorEmailId(true);
//             return false;
//         } else {
//             setErrorEmailId(false);
//         }

//         //gender condition
//         if ((gender === "Select gender")) {
//             Alert.alert("please Select gender");
//             setErrorGender(true);
//             return false;
//         } else {
//             setErrorGender(false);
//         }

//         //password condition
//         if ((password === "") || !(password.test(passRegx))) {
//             Alert.alert("please enter password");
//             setErrorPassword(true);
//             return false;
//         } else {
//             setErrorPassword(false);
//         }

//         //confirm passeord condition
//         if (confirmPass === "" || !(confirmPass === password)) {
//             Alert.alert("please enter confirm password");
//             setErrorConfirmPassword(true);
//             return false;
//         } else {
//             setErrorConfirmPassword(false);
//         }
//         const dataObj = {
//             fullName: fullName,
//             emailId: emailId,
//             phoneNo: phoneNo,
//             gender: gender,
//             password: password,
//             confirmPass: confirmPass
//         }

//         Alert.alert("Datails", "Form Submited Successfully!!")
//     }
//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>
//             <View style={styles.header}>
//                 <Text style={{ marginLeft: 12, alignSelf: "center", fontSize: 30, color: "#63A4BB" }}>Registration Form</Text>
//                 <Text style={styles.label}>FullName</Text>
//                 <TextInput
//                     style={styles.input}
//                     isRequired={true}
//                     placeholder="Enter FullName"
//                     onChangeText={onChangeFullname}
//                     value={fullName}
//                 />
//                 {errorFullname ? <Text style={styles.error}>**Please enter Only Aplhabets</Text> : <Text style={styles.error}></Text>}

//                 <Text style={styles.label}>Phone No</Text>
//                 <TextInput
//                     style={styles.input}
//                     onChangeText={onChangeNumber}
//                     value={phoneNo}
//                     maxLength={10}
//                     keyboardType="numeric"
//                     placeholder="Enter Mobile Number"
//                 />
//                 {errorNumber ? <Text style={styles.error}>**Please enter mobile number</Text> : <Text style={styles.error}></Text>}

//                 <Text style={styles.label}>Email Id</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Email"
//                     onChangeText={onChangeEmail}
//                     value={emailId}
//                 />
//                 {errorEmailId ? <Text style={styles.error}>**Please enter valid emailId</Text> : <Text style={styles.error}></Text>}

//                 <Text style={styles.label}>Gender</Text>
//                 <SelectDropdown
//                     defaultButtonText={"Select Gender"}
//                     data={genderData}
//                     buttonTextStyle={{ color: "#808080", fontSize: 16, position: "absolute", right: 0 }}
//                     dropdownStyle={styles.dropdownStyle}
//                     buttonStyle={styles.buttonStyle}
//                     rowTextStyle={styles.rowTextStyle}
//                     onSelect={(selectedItem, index) => {
//                         if ((selectedItem === "Select gender")) {
//                             Alert.alert("please Select gender");
//                             setErrorGender(true);
//                             return false;
//                         } else {
//                             setErrorGender(false);
//                         }
//                         setGender(selectedItem);
//                     }}
//                     buttonTextAfterSelection={(selectedItem, index) => {
//                         return selectedItem;
//                     }}
//                     rowTextForSelection={(item, index) => {
//                         return item;
//                     }}
//                 />
//                 {errorGender ? <Text style={styles.error}>**Please select gender</Text> : <Text style={styles.error}></Text>}

//                 <Text style={styles.label}>Password</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Password"
//                     onChangeText={onChangePassword}
//                     value={password}
//                 />
//                 {errorPassword ? <Text style={styles.error}>**Please enter password</Text> : <Text style={styles.error}></Text>}

//                 <Text style={styles.label}>Confirm Password</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Enter Confirm Password"
//                     onChangeText={onChangeConfirmPass}
//                     value={confirmPass}
//                 />
//                 {errorConfirmPassword ? <Text style={styles.error}>**password don't match</Text> : <Text style={styles.error}></Text>}

//                 <TouchableOpacity activeOpacity={0.7} onPress={submitHandler} style={styles.submitBtn}>
//                     <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Submit</Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>

//     )
// }
// export default HomeScreen

// const styles = StyleSheet.create({
//     label: {
//         marginTop: 10,
//         marginLeft: 15,
//         fontWeight: 'bold',
//     },
//     error: {
//         marginTop: -7,
//         marginLeft: 15,
//         color: "red",
//         fontWeight: 12
//     },
//     rowTextStyle: {
//         color: "#000"
//     },
//     buttonStyle: {
//         position: 'relative',
//         backgroundColor: '#fff',
//         width: '93%',
//         height: 40,
//         marginHorizontal: 13,
//         marginBottom: 10,
//         marginTop: 10,
//         borderWidth: 1,
//         borderColor: "#3F7B8F",
//         borderRadius: 5,
//     },
//     dropdownStyle: {
//         backgroundColor: '#fff',
//     },
//     submitBtn: {
//         marginHorizontal: 10,
//         backgroundColor: '#3F7B8F',
//         padding: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 10,
//         borderRadius: 5,
//         width: '95%'
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         fontSize: 16,
//         borderWidth: 1,
//         borderColor: "#3F7B8F",
//         padding: 10,
//         borderRadius: 5

//     },
//     header: {
//         flex: 1,
//         backgroundColor: '#fff',
//         paddingHorizontal: 20,
//         paddingVertical: 20,

//     }


// })