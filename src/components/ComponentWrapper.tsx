import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

interface IComponentWrapperProps {
    type?: "select",
    height?: number,
}

const StyledDiv = styled.div`
  height: ${props => props.theme.height}px;
  margin: 20px;

  // Date Picker Element
  .ant-picker {
    height: ${props => props.theme.height}px;
    padding: 0;
    margin: 0;
    display: flex;

    font-size: calc(${props => props.theme.height}px / 2);

    input {
      font-size: calc(${props => props.theme.height}px / 2);
    }
  }
  
  // Select Box
  .ant-select {
    .ant-select-selector {
      height: ${props => props.theme.height}px;
      align-items: center;
      font-size: calc(${props => props.theme.height}px / 2);
    } 
  }
  
  // text input
  .ant-input {
    height: ${props => props.theme.height}px;
    font-size: calc(${props => props.theme.height}px / 2);
  }
  
  .ant-input-affix-wrapper {
    font-size: calc(${props => props.theme.height}px / 2);
  }
  
  // button
  .ant-btn {
    height: ${props => props.theme.height}px;
    font-size: calc(${props => props.theme.height}px / 2);
  }
  
  // circle button
  .ant-btn-circle {
    height: ${props => props.theme.height}px;
    width: ${props => props.theme.height}px;
    font-size: calc(${props => props.theme.height}px / 2);
    
    .anticon {
      font-size: calc(${props => props.theme.height}px / 2);
    }
  }
  
  // auto complete
  .ant-select-auto-complete {
  
  }
`;

const ComponentWrapper: React.FC<IComponentWrapperProps> = (props) => {
    const {type, height} = props;

    // Select dropdown
    useEffect(() => {
        setInterval(() => {
            if(type === "select") {
                document.querySelectorAll('.ant-select-selector input').forEach((input) => {
                    const ariaControls = input.getAttribute('aria-controls');

                    document.querySelectorAll(`#${ariaControls}`).forEach((element) => {
                        const targetNode = element.parentNode;

                        let inputHeight = 0;
                        let input = document.querySelector(`[aria-controls="${element.id}"]`);
                        if(input && input.parentNode && input.parentNode.parentNode && input.parentNode.parentNode.parentNode) {
                            inputHeight = (input.parentNode.parentNode.parentNode as any).clientHeight;

                        }

                        if(targetNode) {
                            targetNode.querySelectorAll('.ant-select-item').forEach((node) => {
                                if(height && !node.getAttribute('height-added')) {
                                    node.setAttribute('height-added', "true");
                                    (node as any).style.height = `${inputHeight}px`;
                                    (node as any).style.alignItems = "center";
                                    (node as any).style.fontSize = `calc(${inputHeight}px / 2)`;
                                }
                            });
                        }
                    });
                });
            }
        }, 1000);
    }, [type, height]);

    return (
        <>
            <StyledDiv theme={{height}}>
                {props.children}
            </StyledDiv>
        </>
    );
};

export default ComponentWrapper;
