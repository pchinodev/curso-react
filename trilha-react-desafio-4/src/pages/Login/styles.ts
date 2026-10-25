import styled from 'styled-components';
import type { HTMLAttributes } from 'react';



export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #FFFFFF;

    border-radius: 8px;
    padding: 20px;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #81259D;
`

export const Description = styled.p<HTMLAttributes<HTMLParagraphElement>>`
    margin-top: 8px;
    color: #555;
`

export const DemoCredentials = styled.p<HTMLAttributes<HTMLParagraphElement>>`
    margin-top: 16px;
    color: #666;
    font-size: 12px;
    line-height: 1.5;
`

export const SuccessMessage = styled.p<
    HTMLAttributes<HTMLParagraphElement> & { $error?: boolean }
>`
    margin-bottom: 12px;
    color: ${({ $error }) => ($error ? "#b00020" : "#247a3d")};
    font-size: 14px;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`
