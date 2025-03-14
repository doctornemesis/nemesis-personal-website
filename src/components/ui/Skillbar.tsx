export default function SkillBar({ name, level }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="font-medium">{name}</span>
                <span>
          {level >= 85 ? 'Advanced' : level >= 60 ? 'Intermediate' : 'Beginner'}
        </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    );
}