import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h2>Student Name: Jared Lopez</h2>
      <p>
        GitHub Repository: {''}
        <Link href="https://github.com/vlo-red/cprg306-assignments" target="_blank">
          My Github Repo
        </Link>
      </p>
    </div>
  )
}