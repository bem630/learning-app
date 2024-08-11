import React from 'react'
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterStyled>Footer</FooterStyled>
  )
}
const FooterStyled = styled.div`
  /*border: 1px solid red;*/
  padding: 3rem;
  background-color: #000;
  color: white;
  line-height: 1.86;
  font-size: 20px;
  .footer-container {
    display: grid;
    grid-template-columns: 45% 20% 30%;
    padding-bottom: 80px;
    h3 {
        letter-spacing: 1.5px;
        font-weight: bold;
        line-height: 1em;
        font-size: 30px;
        margin-bottom: 10px;
    }

    .footer-left {
        .footer-left-icon {
            display: flex;
            align-items: center;
            font-size: 18px;
            .left-icon {
                margin-right: 10px;
                color: #007bff;
            }
        }
    }

    .footer-center {
        ul {
            li {
                list-style-type: none;
                .footer-link {
                    color: white;
                    text-decoration: none;
                    font-size: 18px;
                    &:hover {
                        color: #007bff;
                    }
                }
            }
        }
    }
    .footer-right {
        ul {
            li {
                list-style-type: none;
                .footer-link {
                    color: white;
                    text-decoration: none;
                    font-size: 18px;
                    &:hover {
                        color: #007bff;
                    }
                }
            }
        }
    }
    }
    .footer-bottom {
        .footer-icon  {
            border-bottom: 2px solid white;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            .text-icon {
                margin-right: 10px;
            }
            .icon {
                margin: 0 10px;
                font-size: 24px;
                cursor: pointer;
                display: flex;
                transition: color 0.3s;
                color: #cec0c0;
                &:hover {
                    color: #007bff;
                }
            }
        }
    }
    @media (max-width: 968px) {
        font-size: 16px;
        .footer-container {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        font-size: 16px;
        .footer-left {
            .footer-left-icon {
                font-size: 16px;
            }
        }

        .footer-center {
            ul {
                li {
                    .footer-link {
                        font-size: 16px;
                    }
                }
            }
        }
        .footer-right {
            ul {
                li {
                    .footer-link {
                        font-size: 16px;
                    }
                }
            }
        }
        }
    }
    @media (max-width: 668px) {
        font-size: 14px;
        .footer-container {
        grid-template-columns: 1fr;
        grid-gap: 20px;
        font-size: 14px;

        .footer-left {
            .footer-left-icon {
                font-size: 14px;
            }
        }

        .footer-center {
            ul {
                li {
                    .footer-link {
                        font-size: 14px;
                    }
                }
            }
        }
        .footer-right {
            ul {
                li {
                    .footer-link {
                        font-size: 14px;
                    }
                }
            }
        }
        }
    }
    
`;
