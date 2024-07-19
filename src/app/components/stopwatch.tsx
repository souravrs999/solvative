"use client";
import {
  forwardRef,
  HTMLAttributes,
  Ref,
  FC,
  useState,
  useEffect,
  useRef,
} from "react";
import Button from "./button";

type StopwatchProps = HTMLAttributes<HTMLDivElement> & {};
const Stopwatch: FC<StopwatchProps> = forwardRef(
  (props: StopwatchProps, ref: Ref<HTMLDivElement>) => {
    const { ...rest } = props;
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTimes, setElapsedTimes] = useState<number[]>([]);

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const formatTime = (time: number): string => {
      const sMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
      const seconds = Math.floor(time / 1000);
      const sSeconds = `0${seconds % 60}`.slice(-2);
      const sMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
      return `${sMinutes}:${sSeconds}:${sMilliseconds}`;
    };

    const handleStartPause = (): void => {
      setIsRunning((prev) => !prev);
    };

    const handleStop = (): void => {
      setIsRunning(false);
      if (time !== 0) {
        setElapsedTimes([...elapsedTimes, time]);
      }
      setTime(0);
    };

    const handleReset = (): void => {
      setIsRunning(false);
      setTime(0);
      setElapsedTimes([]);
    };

    useEffect(() => {
      if (isRunning) {
        timerRef.current = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }, [isRunning]);

    return (
      <div
        ref={ref}
        className="flex flex-col gap-4 items-center bg-white shadow-xl rounded-lg w-full max-w-sm p-8 border"
        {...rest}
      >
        <h3 className="font-bold text-xl">Stopwatch</h3>
        <p className="text-3xl font-black">{formatTime(time)}</p>
        <div className="w-full flex gap-2 items-center">
          <Button onClick={handleStartPause}>
            {isRunning ? "Pause" : "Start"}
          </Button>
          <Button onClick={handleStop}>Stop</Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
        <div className="flex flex-col justify-start w-full mt-2">
          <h3 className="text-lg font-bold">Elapsed Times</h3>
          {elapsedTimes.length > 0 ? (
            <ul className="mt-1">
              {elapsedTimes?.map((elapsedTime, index) => (
                <li key={index} className="text-sm text-gray-500">
                  {index + 1}: {formatTime(elapsedTime)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No times recorded</p>
          )}
        </div>
      </div>
    );
  }
);
Stopwatch.displayName = "Stopwatch";
export default Stopwatch;
