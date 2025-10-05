

    export const getUser = aysnc (req, res) => {
        try {
            const user = await userService.getUser();
            res.json(users)
        } catch (error){
            res.status(500).json({ message: error.message });
        }
    }

    export const createUser = async (req, res) => {
        try{
            const users = await userService.createUser(req.body);
            return res.status(201).json(users);
        } catch (error){
            return handleError(res, error);
        
        }

    }

    export const getUserById = async (req, res) => {
        try{
        const user = await userService,getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
        } catch (error){
            res.status(500).json({ message: error.message });
        }

    }
