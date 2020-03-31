<?php


namespace SilverStripe\SnapshotAdmin;


use GraphQL\Type\Definition\Type;
use SilverStripe\GraphQL\QueryCreator;
use SilverStripe\ORM\DataObject;
use SilverStripe\Snapshots\Snapshot;
use SilverStripe\Snapshots\SnapshotItem;

class LatestSnapshotQuery extends QueryCreator
{
    public function type()
    {
        return $this->manager->getType('Snapshot');
    }

    public function args()
    {
        return [
            'origin' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The hash of the dataobject, (e.g. SnapshotHash)',
            ],
            'version' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The version number',
            ]
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'readLatestSnapshotFromVersion',
            'description' => 'Get a snapshot from a given hash and version number',
        ];
    }

    public function resolve($obj, $args = [], $context = [])
    {
        $snapshotTable = DataObject::getSchema()->tableName(Snapshot::class);
        $itemTable = DataObject::getSchema()->tableName(SnapshotItem::class);
        $snapshot = Snapshot::get()->filter([
           'OriginHash' => $args['origin'],
           'Version' => $args['version'],
        ])
            ->innerJoin(
                $itemTable,
                "\"$itemTable\".\"SnapshotID\" = \"$snapshotTable\".\"ID\""
            )
            ->sort("\"$snapshotTable\".\"ID\" DESC")
            ->first();
        if (!$snapshot) {
            return null;
        }
        if ($snapshot->canView($context['currentUser'])) {
            return $snapshot;
        }

        return null;
    }

}
