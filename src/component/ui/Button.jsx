import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props) {
    const { title, onClick } = props;
    
    // click 이벤트를 상위 컴포넌트로 부터 받을 수 있다
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
}

export default Button;