'use client'
import styled from "styled-components";

export const Button = styled.button`
    padding: 8px 14px;
    color: #fff;
    width: 100px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    border: none;
    border-radius: 6px;
    background-color: #10375C;
    white-space: nowrap;
    cursor: pointer;

    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
        background-color: red;
    }
`