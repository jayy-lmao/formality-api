import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";
import Form from "./Form";

@ObjectType()
@Entity()
class User extends BaseEntity {
  // @Field((type) => ID)
  // @PrimaryGeneratedColumn()
  // public id: number;

  @ObjectIdColumn()
  @Field()
  public id!: string;

  @ObjectIdColumn({ name: "id" })
  // tslint:disable-next-line: variable-name
  public _id!: string;

  @Field()
  @Column("text", { unique: true })
  public email: string;

  @Field()
  @Column()
  public password: string;

  @Field(type => [Form])
  public forms: Form[];
}
export default User;
