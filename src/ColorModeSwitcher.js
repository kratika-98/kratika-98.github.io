import React, { useContext } from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { AuthContext } from './ContextAPI/ContextProvider';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const {Toggle,setToggle} = useContext(AuthContext) ;

  const handleClick = ()=>{
    toggleColorMode()
    if( Toggle === true){
      setToggle(false) ;
    }
    else{
      setToggle(true) ;
    }
  }

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={handleClick}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
