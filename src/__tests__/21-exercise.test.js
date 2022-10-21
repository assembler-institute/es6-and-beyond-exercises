import { Person, Employee, ana, newAna} from "../21-exercise/21-exercise";

describe("21-exercise", function () {
    test("create a class Employee that extends the Person class", async () => {
        const expectedAna = {
            firstName: "Ana",
            lastName: "Spark",
        };

        const expectedNewAna = {
            firstName: "Ana",
            lastName: "Spark",
            jobTitle: "Developer",
        };

        expect(expectedAna).toEqual(ana);
        expect(expectedNewAna).toEqual(newAna);

        expect(ana.sayName()).toEqual(`Ana Spark`);

        expect(newAna.sayName()).toEqual(`Ana Spark`);
        expect(newAna.getJobTitle()).toEqual(`Developer`);

        expect(ana).toBeInstanceOf(Person);
        expect(newAna).toBeInstanceOf(Employee);

    });
});
