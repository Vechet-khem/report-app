import { redirect } from 'next/navigation';

export default function Page() {
    const userId = true;

    if (!userId) {
        return redirect('/login');
    } else {
        redirect('/dashboard/overview');
    }
}