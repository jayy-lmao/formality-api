import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Question from "./Question";
import User from "./User";

@ObjectType()
@Entity()
class Form extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => ID)
    public id: number;

    @Column()
    @Field()
    public title: string;

    @Column()
    @Field()
    public description: string;

    @Field((type) => [ Question ])
    public questions: Question[];

    @Column()
    public userId: number;
}

export default Form;
