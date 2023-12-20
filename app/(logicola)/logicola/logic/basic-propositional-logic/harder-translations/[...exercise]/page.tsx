'use client';
import Exercise from '@/components/logicola/exercise';
import ExerciseSidebar from '@/components/logicola/exerciseSidebar';
import { usePathname } from 'next/navigation';

export default function ExercisePage({
  params,
}: {
  params: { exercise: number };
}) {
  const pathname = usePathname();
  return (
    <>
      <div className='flex w-full h-screen overflow-scroll'>
        <ExerciseSidebar
          chapter={6.8}
          path='/logicola/logic/basic-propositional-logic/harder-translations/'
          isQuestionActive={(index) => {
            return (
              pathname ===
              `/logicola/logic/basic-propositional-logic/harder-translations/${
                index + 1
              }`
            );
          }}
          initialQuestionIdx={0}
        />
        <div className='p-4 w-full'>
          <h1 className='mb-6 text-3xl font-bold text-stone-900'>
            Quiz (6.8.a)
          </h1>
          {/* We're subtracting 1 from the parameters because the index of the exercises starts at 0 */}
          <Exercise chapter={6.8} initialQuestionIdx={params.exercise - 1} />
        </div>
      </div>
    </>
  );
}
