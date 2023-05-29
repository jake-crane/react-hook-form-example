import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import type { InferType } from 'yup';
import * as yup from 'yup';

const schema = yup.object({
    firstName: yup.string().required(),
    middleInitial: yup.string(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required().typeError('Please enter a number.')
}).required();

type FormData = InferType<typeof schema>;

const UserForm = (): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <Container maxWidth="md">
            <h1>User Sign-Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="First Name *"
                            error={Boolean(errors.firstName)}
                            helperText={errors.firstName?.message}
                            {...register('firstName')}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Middle Initial"
                            error={Boolean(errors.middleInitial)}
                            helperText={errors.middleInitial?.message}
                            {...register('middleInitial')}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Last Name *"
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName?.message}
                            {...register('lastName')}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Email *"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            {...register('email')}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            fullWidth
                            variant="standard"
                            label="Age *"
                            error={Boolean(errors.age)}
                            helperText={errors.age?.message}
                            {...register('age')}
                        />
                    </Grid>
                </Grid>
                <Stack mt={3} alignItems={{ xs: undefined, md: 'end' }}>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </Stack>
            </form>
        </Container>
    );
};

export default UserForm;
