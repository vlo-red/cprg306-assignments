"use client";

// Import the useUserAuth hook
import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";

export default function Page() {

  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };

  // Sign out of Firebase
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      {!user ? (
        <>
          <h1>Week 10 - Shopping List App</h1>
          <button onClick={handleLogin}>
            Login with GitHub
          </button>
        </>
      ) : (
        <>
          {/* Display some of the user's information */}
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>

          <button onClick={handleLogout}>
            Logout
          </button>

          <br />

          <Link href="/week-10/shopping-list">
            Go to Shopping List
          </Link>
        </>
      )}
    </main>
  );
}