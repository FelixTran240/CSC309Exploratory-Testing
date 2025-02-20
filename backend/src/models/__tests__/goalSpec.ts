import GoalModel from "../goal.model";
import UserModel from "../user.model";
import Goal from "../../types/goal.type";
import User from "../../types/user.type";
import db from "../../database/index";

const goalModel = new GoalModel();
const userModel = new UserModel();

describe("Goal Model", () => {
  describe("Test Methods Exist", () => {
    it("Should have create user method", () => {
      expect(goalModel.create).toBeDefined();
    });

    it("Should have read by ID method", () => {
      expect(goalModel.getByID).toBeDefined();
    });

    it("Should have update user method", () => {
      expect(goalModel.update).toBeDefined();
    });

    it("Should have delete user method", () => {
      expect(goalModel.deleteByID).toBeDefined();
    });
  });

  describe("Test GoalModel Logic", async () => {
    const user = {
      username: "testname11",
      email: "test@polyeats1.c111om",
      password: "testing1word",
      first_name: "test1er",
      last_name: "testin1gton"
    } as User;

    const goal = {
      user_id: 0,
      calories: 100,
      protein: 100,
      fat: 100,
      carbs: 100
    } as Goal;

    beforeAll(async () => {
      const createdUser = await userModel.create(user);
      goal.user_id = createdUser.id as unknown as number;
    });

    afterAll(async () => {
      const connection = await db.connect();
      let sql = `DELETE FROM goals`;
      await connection.query(sql);
      sql = `DELETE FROM users`;
      await connection.query(sql);

      connection.release();
    });

    it("Create method should return a new goal", async () => {
      const returnedGoal = await goalModel.create(goal);
      goal.id = returnedGoal.id;
      expect(returnedGoal).toEqual({
        id: returnedGoal.id,
        ...goal
      } as Goal);
    });

    it("Read method should retreive element by id", async () => {
      const returnedGoal = await goalModel.getByID(
        goal.id as unknown as string
      );
      expect(returnedGoal).toEqual(goal);
    });

    it("Update method should update a user", async () => {
      const returnedUser = await goalModel.update(
        {
          ...goal,
          calories: 1312,
          fat: 123123
        },
        goal.id as unknown as string
      );
      expect(returnedUser).toEqual({
        ...goal,
        calories: 1312,
        fat: 123123
      });
    });

    it("Delete method should return the id of the deleted user", async () => {
      const returnedId = await goalModel.deleteByID(
        goal.id as unknown as string
      );
      expect(returnedId).toEqual(goal.id as unknown as string);
    });
  });
});
