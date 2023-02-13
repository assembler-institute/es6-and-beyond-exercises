import { Person, Employee, ana, peter} from "../21-exercise/21-exercise";

describe("21-exercise", function () {
    test("create a class Employee that extends the Person class", async () => {
        const expectedAna = {
            firstName: "Ana",
            lastName: "Spark",
        };

        const expectedPeter = {
            firstName: "Peter",
            lastName: "Jackson",
            jobTitle: "Developer",
        };

        expect(expectedAna).toEqual(ana);
        expect(expectedPeter).toEqual(peter);

        expect(ana.sayName()).toEqual(`Ana Spark`);

        expect(peter.sayName()).toEqual(`Peter Jackson`);
        expect(peter.getJobTitle()).toEqual(`Developer`);

        expect(ana).toBeInstanceOf(Person);
        expect(peter).toBeInstanceOf(Employee);

    });
});
