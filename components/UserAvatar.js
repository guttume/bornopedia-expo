import {Avatar, Box} from "native-base";

export function UserAvatar() {
    return <Box
        position="absolute"
        mx="4"
        my="8"
        background="white"
        borderRadius="full"
        p="1"
        m="1"
    >
        <Avatar
            bg="green.500"
            source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
            size="2xl"
        />
    </Box>;
}