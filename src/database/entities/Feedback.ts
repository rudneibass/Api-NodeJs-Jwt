import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("feedback")
class Feedback {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;

    @Column()
    user_receiver: string;  
    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;

    @Column()
    feedback_date: Date;

    @Column()
    points_improve: string;

    @Column()
    points_keep: string;

    @Column()
    final_feedback: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Feedback }