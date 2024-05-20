import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  pageWrapper: {
    padding: 16
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 4,
    borderRadius: 999,
    width: 60,
    height: 60,
    padding: 10,
  },
  genderOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 4,
    borderRadius: 999,
    width: 70,
    height: 70,
    padding: 10,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  pageContent: {
    display: 'flex',
    gap: 8
  },
})