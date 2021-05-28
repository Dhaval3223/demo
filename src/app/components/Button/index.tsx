import * as React from 'react';
import styled from 'styled-components/macro';
import { Button } from '@chakra-ui/react';

interface Props {
  name: string;
  color: string;
}

export function CustomButton(props: Props) {
  return (
    <Button
      background={props.color}
      p="12px 125.5px 11px 126.5px"
      borderRadius="full"
      color="#fff"
      width="300px"
      height="45px"
    >
      {props.name}
    </Button>
  );
}
