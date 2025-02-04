import { defineStore } from "pinia";
import { ref } from "vue";

export const useToDoStore =  defineStore('todos', () => {
    const users = ref([
        {id: '3120411098', name: 'Tran Tuong Minh', email: 'tranminh2014.tm@gmail.com', phone: '3120411098'}
    ]);
    return { users };
});