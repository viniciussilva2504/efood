        import styled from 'styled-components'

        export const FooterContainer = styled.footer`
        background-color: #FFEBD9;
        padding: 40px 0;
        text-align: center;
        `

        export const Logo = styled.img`
        margin-bottom: 32px;
        width: 125px;
        height: auto;
        `

        export const SocialLinks = styled.div`
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-bottom: 80px;
        `

    export const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #E66767;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
    }
    
    svg {
        width: 24px;
        height: 24px;
        fill: #E66767;
    }
`

export const Description = styled.p`
        font-size: 10px;
        line-height: 12px;
        color: #E66767;
        max-width: 480px;
        margin: 0 auto;
        `
