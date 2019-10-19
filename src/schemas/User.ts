import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Form from "./Form";

@ObjectType()
@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => ID)
    public id: number;

    @Column()
    @Field()
    public email: string;

    @Column("text", { unique: true })
    @Field()
    public password: string;

    @Field((type) => [ Form ])
    public forms: Form[];
}
export default User;
