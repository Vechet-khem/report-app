// import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Page() {
    const userId = true;

    if (!userId) {
        return redirect('/login');
    } else {
        redirect('/dashboard/overview');
    }
}