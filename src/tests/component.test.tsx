import { render, screen } from "@testing-library/react";
import WelcomeUser from "../components/WelcomeUser";
import Navbar from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Welcome user", ()=>{
    test("should display name of WelcomeUser and age in 2 years", () => {
        const age: number = 22
        render(<WelcomeUser name="Mégane" age={age} />);
        expect(screen.getByText("Welcome Mégane !")).toBeDefined();
        expect(screen.getByText(`Apparemment vous aurez ${age + 2} ans dans 2 ans`)).toBeDefined();

    });
    // test("should display age in 2 years", () => {
    //     const age: number = 22
    //     render(<WelcomeUser name="Mégane" age={age} />);
    //     expect(screen.getByText(`Apparemment vous aurez ${age + 2} ans dans 2 ans`)).toBeDefined();
    // });
})

describe("Navbar", () => {
    test("should display content", () => {
        render (
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
            expect(screen.getByText("Home")).toBeDefined();
            expect(screen.getByText("Todo")).toBeDefined();
            expect(screen.getByText("Freelance")).toBeDefined();
            expect(screen.getByText("Mon Profil")).toBeDefined();
    });
    test("should find the url of 'Mon profile'", () => {
        render(
            <MemoryRouter >
                <Navbar/>
            </MemoryRouter>
        );
        const profileLink = screen.getByText("Mon Profil")
        expect(profileLink).toBeDefined()

        const linkHref = profileLink.getAttribute("href")
        expect(linkHref).toEqual("/profile/Mégane")
    });
})

